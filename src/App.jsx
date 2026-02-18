import React, { useState, useEffect } from 'react';
import { Shuffle, Users, Download, RotateCcw, Info, Share2, Copy, RefreshCw } from 'lucide-react';
import { RACKETS } from './data/rackets.js';

// Unicode-safe encoding/decoding functions
const encodeUnicodeBase64 = (str) => {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  } catch (error) {
    console.error('Encoding error:', error);
    throw new Error('Failed to encode data for sharing');
  }
};

const decodeUnicodeBase64 = (str) => {
  try {
    return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  } catch (error) {
    console.error('Decoding error:', error);
    throw new Error('Failed to decode shared data');
  }
};

const NecromundaRacketApp = () => {
  const [numPlayers, setNumPlayers] = useState('');
  const [racketsPerPlayer, setRacketsPerPlayer] = useState('2');
  const [playerNames, setPlayerNames] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedRacket, setSelectedRacket] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  // Load assignments from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedData = urlParams.get('data');
    
    if (encodedData) {
      try {
        const decodedData = JSON.parse(decodeUnicodeBase64(encodedData));
        
        // Reconstruct full assignments from compact data
        const reconstructedAssignments = decodedData.assignments.map(assignment => {
          // Handle both old format (with full rackets) and new format (with racketIds)
          const rackets = assignment.racketIds 
            ? assignment.racketIds.map(id => RACKETS.find(racket => racket.id === id)).filter(Boolean)
            : assignment.rackets || [];
            
          return {
            player: assignment.player,
            name: assignment.name,
            alignment: assignment.alignment || 'Outlaw', // Default for old URLs
            rackets: rackets
          };
        });
        
        setAssignments(reconstructedAssignments);
        setNumPlayers(decodedData.numPlayers?.toString() || '');
        setRacketsPerPlayer(decodedData.racketsPerPlayer?.toString() || '2');
        setPlayerNames(decodedData.playerNames || []);
        
        // Generate share URL for loaded data
        const baseUrl = window.location.href.split('?')[0];
        const newShareUrl = `${baseUrl}?data=${encodedData}`;
        setShareUrl(newShareUrl);
      } catch (error) {
        console.error('Failed to load shared results:', error);
        alert('Failed to load shared data. The URL may be corrupted.');
      }
    }
  }, []);

  const handleNumPlayersChange = (value) => {
    setNumPlayers(value);
    const count = parseInt(value) || 0;
    
    const newNames = Array(count).fill('').map((_, i) => 
      playerNames[i] !== undefined ? playerNames[i] : ''
    );
    setPlayerNames(newNames);
  };

  const updateAssignedPlayerName = (playerIndex, newName) => {
    const newAssignments = [...assignments];
    newAssignments[playerIndex].name = newName.trim() || `Player ${playerIndex + 1}`;
    setAssignments(newAssignments);
    
    // Update share URL
    const effectiveNames = newAssignments.map(assignment => assignment.name);
    generateShareUrl(newAssignments, newAssignments.length, parseInt(racketsPerPlayer), effectiveNames);
  };

  const updatePlayerAlignment = (playerIndex, alignment) => {
    const newAssignments = [...assignments];
    newAssignments[playerIndex].alignment = alignment;
    setAssignments(newAssignments);
    
    // Update share URL
    const effectiveNames = newAssignments.map(assignment => assignment.name);
    generateShareUrl(newAssignments, newAssignments.length, parseInt(racketsPerPlayer), effectiveNames);
  };

  const updatePlayerName = (index, name) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = name.trim();
    setPlayerNames(updatedNames);
  };

  const validateInputs = () => {
    const playerCount = parseInt(numPlayers);
    const racketsCount = parseInt(racketsPerPlayer);
    
    if (!playerCount || playerCount < 1) {
      return { isValid: false, error: 'Please enter a valid number of players' };
    }
    
    if (!racketsCount || racketsCount < 1) {
      return { isValid: false, error: 'Please enter a valid number of rackets per player' };
    }

    if (showNameInput || playerNames.some(name => name !== '')) {
      const emptyNames = playerNames.some((name, index) => 
        index < playerCount && (!name || name.trim() === '')
      );
      if (emptyNames) {
        return { isValid: false, error: 'All player names must be filled in or use default names' };
      }
    }
    
    return { isValid: true, error: null };
  };

  const getEffectivePlayerNames = () => {
    return playerNames.map((name, index) => 
      name && name.trim() !== '' ? name.trim() : `Player ${index + 1}`
    );
  };

  const addNewPlayer = () => {
    const racketsCount = parseInt(racketsPerPlayer);
    const newPlayerNumber = assignments.length + 1;
    const newPlayerName = `Player ${newPlayerNumber}`;
    
    // Get all currently assigned rackets
    const allAssignedRackets = assignments.flatMap(assignment => assignment.rackets);
    
    // Create available pool (exclude assigned rackets)
    let availableRackets = RACKETS.filter(racket => 
      !allAssignedRackets.some(assigned => assigned.id === racket.id)
    );
    
    // If not enough available rackets, refresh the pool as needed
    let playerRackets = [];
    for (let i = 0; i < racketsCount; i++) {
      if (availableRackets.length === 0) {
        availableRackets = [...RACKETS];
        // Remove already selected rackets for this player to avoid duplicates
        availableRackets = availableRackets.filter(racket => 
          !playerRackets.some(selected => selected.id === racket.id)
        );
      }
      
      const randomIndex = Math.floor(Math.random() * availableRackets.length);
      const selectedRacket = availableRackets.splice(randomIndex, 1)[0];
      playerRackets.push(selectedRacket);
    }
    
    // Add new player to assignments
    const newAssignments = [...assignments, {
      player: newPlayerNumber,
      name: newPlayerName,
      alignment: 'Outlaw', // Default alignment
      rackets: playerRackets
    }];
    
    setAssignments(newAssignments);
    generateShareUrl(newAssignments, newPlayerNumber, parseInt(racketsPerPlayer), [...getEffectivePlayerNames(), newPlayerName]);
  };

  const redrawSingleRacket = (playerIndex, racketIndex) => {
    // Get all currently assigned rackets to avoid duplicates
    const allAssignedRackets = assignments.flatMap(assignment => assignment.rackets);
    const currentRacket = assignments[playerIndex].rackets[racketIndex];
    
    // Remove current racket from assigned list for pool calculation
    const otherAssignedRackets = allAssignedRackets.filter(racket => racket.id !== currentRacket.id);
    
    // Create available pool (exclude other assigned rackets)
    let availableRackets = RACKETS.filter(racket => 
      !otherAssignedRackets.some(assigned => assigned.id === racket.id)
    );
    
    // If no available rackets (shouldn't happen with 26 rackets), reset pool
    if (availableRackets.length === 0) {
      availableRackets = [...RACKETS];
    }
    
    // Remove current racket from available pool to ensure we get a different one
    availableRackets = availableRackets.filter(racket => racket.id !== currentRacket.id);
    
    // If still no available rackets, allow the same racket (edge case)
    if (availableRackets.length === 0) {
      availableRackets = [currentRacket];
    }
    
    // Select random racket from available pool
    const randomIndex = Math.floor(Math.random() * availableRackets.length);
    const newRacket = availableRackets[randomIndex];
    
    // Update assignments
    const newAssignments = [...assignments];
    newAssignments[playerIndex].rackets[racketIndex] = newRacket;
    
    setAssignments(newAssignments);
    generateShareUrl(newAssignments, parseInt(numPlayers), parseInt(racketsPerPlayer), getEffectivePlayerNames());
  };

  const assignRackets = () => {
    const validation = validateInputs();
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    const playerCount = parseInt(numPlayers);
    const racketsCount = parseInt(racketsPerPlayer);
    const effectiveNames = getEffectivePlayerNames();
    
    let availableRackets = [...RACKETS];
    const newAssignments = [];

    for (let i = 0; i < playerCount; i++) {
      const playerRackets = [];
      
      for (let j = 0; j < racketsCount; j++) {
        if (availableRackets.length === 0) {
          availableRackets = [...RACKETS];
        }
        
        const randomIndex = Math.floor(Math.random() * availableRackets.length);
        const selectedRacket = availableRackets.splice(randomIndex, 1)[0];
        playerRackets.push(selectedRacket);
      }
      
      newAssignments.push({
        player: i + 1,
        name: effectiveNames[i],
        alignment: 'Outlaw', // Default alignment
        rackets: playerRackets
      });
    }

    setAssignments(newAssignments);
    setShowNameInput(false);
    generateShareUrl(newAssignments, playerCount, racketsCount, effectiveNames);
  };

  const generateShareUrl = (assignments, playerCount, racketsCount, effectiveNames) => {
    try {
      // Create compact data structure with only racket IDs to reduce URL size
      const shareData = {
        assignments: assignments.map(assignment => ({
          player: assignment.player,
          name: assignment.name,
          alignment: assignment.alignment,
          racketIds: assignment.rackets.map(racket => racket.id) // Only store IDs, not full objects
        })),
        numPlayers: playerCount,
        racketsPerPlayer: racketsCount,
        playerNames: effectiveNames,
        timestamp: new Date().toISOString()
      };
      
      const encodedData = encodeUnicodeBase64(JSON.stringify(shareData));
      const baseUrl = window.location.href.split('?')[0];
      const newShareUrl = `${baseUrl}?data=${encodedData}`;
      
      // Check URL length - warn if still too long
      if (newShareUrl.length > 2000) {
        console.warn('Share URL is still quite long:', newShareUrl.length, 'characters');
      }
      
      setShareUrl(newShareUrl);
      
      if (window.history && window.history.pushState) {
        window.history.pushState({}, '', newShareUrl);
      }
    } catch (error) {
      console.error('Failed to generate share URL:', error);
      alert('Failed to generate share URL: ' + error.message);
    }
  };

  const copyShareUrl = async () => {
    if (!shareUrl) {
      alert('No share URL available. Please assign rackets first.');
      return;
    }
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        alert('✅ Share URL copied to clipboard!');
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          alert('✅ Share URL copied to clipboard!');
        } else {
          throw new Error('Copy command failed');
        }
      }
    } catch (error) {
      console.error('Failed to copy URL:', error);
      prompt('Copy this share URL manually:', shareUrl);
    }
  };

  const resetAssignments = () => {
    setAssignments([]);
    setNumPlayers('');
    setRacketsPerPlayer('2');
    setPlayerNames([]);
    setSelectedRacket(null);
    setShowNameInput(false);
    setShareUrl('');
    
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  const exportResults = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      numPlayers: assignments.length,
      racketsPerPlayer: parseInt(racketsPerPlayer),
      totalRacketsAssigned: assignments.reduce((total, player) => total + player.rackets.length, 0),
      poolRefreshes: Math.floor(assignments.reduce((total, player) => total + player.rackets.length, 0) / 26),
      shareUrl: shareUrl,
      assignments: assignments
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `necromunda-rackets-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const getSuitColor = (card) => {
    return card.includes('Hearts') ? 'text-red-600' : 'text-gray-800';
  };

  const getSuitIcon = (card) => {
    return card.includes('Hearts') ? '♥' : '♣';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="relative mb-8">
          {/* Logo positioned absolutely to the left */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
            <img 
              src="/necromunda-logo-large.png" 
              alt="Necromunda Logo" 
              className="w-24 h-24 object-contain rounded-lg"
            />
          </div>
          
          {/* Centered text content */}
          <div className="text-center">
            {/* Show logo on mobile above text */}
            <div className="flex justify-center mb-4 md:hidden">
              <img 
                src="/necromunda-logo-large.png" 
                alt="Necromunda Logo" 
                className="w-20 h-20 object-contain rounded-lg"
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-2">
              Necromunda Racket Generator
            </h1>
            <p className="text-gray-300 text-lg">Randomly distribute rackets among your players</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label htmlFor="players" className="block text-sm font-medium text-gray-300 mb-2">
                <Users className="inline w-4 h-4 mr-1" />
                Number of Players
              </label>
              <input
                id="players"
                type="number"
                min="1"
                value={numPlayers}
                onChange={(e) => handleNumPlayersChange(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter number of players"
              />
            </div>
            
            <div>
              <label htmlFor="rackets" className="block text-sm font-medium text-gray-300 mb-2">
                <Shuffle className="inline w-4 h-4 mr-1" />
                Rackets per Player
              </label>
              <input
                id="rackets"
                type="number"
                min="1"
                value={racketsPerPlayer}
                onChange={(e) => setRacketsPerPlayer(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Rackets per player"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={() => setShowNameInput(!showNameInput)}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                disabled={!numPlayers}
              >
                {showNameInput ? 'Hide Names' : 'Set Names'}
              </button>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={assignRackets}
                className={`w-full px-4 py-2 rounded-md font-medium transition-colors ${
                  validateInputs().isValid 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-gray-500 cursor-not-allowed text-gray-300'
                }`}
                disabled={!validateInputs().isValid}
                title={!validateInputs().isValid ? validateInputs().error : 'Assign rackets to players'}
              >
                <Shuffle className="w-4 h-4 mr-2 inline" />
                Assign Rackets
              </button>
            </div>
          </div>
          
          {/* Action Buttons After Assignment */}
          {assignments.length > 0 && (
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="btn-group">
                <button
                  onClick={addNewPlayer}
                  className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors inline-flex items-center gap-2"
                  title="Add another player with assigned rackets"
                >
                  <Users className="w-4 h-4" />
                  Add Player
                </button>
                <button
                  onClick={resetAssignments}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
                <button
                  onClick={copyShareUrl}
                  className={`px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2 ${
                    shareUrl 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!shareUrl}
                  title={shareUrl ? "Copy shareable URL to clipboard" : "Share URL not ready"}
                >
                  <Share2 className="w-4 h-4" />
                  Share {shareUrl && '✓'}
                </button>
                <button
                  onClick={exportResults}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          )}
          
          {/* Player Names Input */}
          {showNameInput && numPlayers && (
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-medium text-white">Player Names</h3>
                <button
                  onClick={() => {
                    const defaultNames = Array(parseInt(numPlayers)).fill('').map((_, i) => `Player ${i + 1}`);
                    setPlayerNames(defaultNames);
                  }}
                  className="text-sm px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-200 transition-colors"
                >
                  Use Defaults
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {Array(parseInt(numPlayers)).fill(0).map((_, index) => {
                  const isEmpty = !playerNames[index] || playerNames[index].trim() === '';
                  const hasError = showNameInput && isEmpty;
                  
                  return (
                    <div key={index}>
                      <label className="block text-sm text-gray-300 mb-1">
                        Player {index + 1}
                        {hasError && <span className="text-red-400 ml-1">*</span>}
                      </label>
                      <input
                        type="text"
                        value={playerNames[index] || ''}
                        onChange={(e) => updatePlayerName(index, e.target.value)}
                        className={`w-full px-3 py-2 rounded-md text-white focus:outline-none focus:ring-2 transition-colors ${
                          hasError 
                            ? 'bg-red-900 bg-opacity-30 border border-red-500 focus:ring-red-500' 
                            : 'bg-gray-700 border border-gray-600 focus:ring-blue-500'
                        }`}
                        placeholder={`Player ${index + 1}`}
                      />
                      {hasError && (
                        <p className="text-xs text-red-400 mt-1">Name is required</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-400 mt-3">
                💡 Leave empty to use default names, or fill in custom names for all players
              </p>
            </div>
          )}
          
          {/* Validation Error Display */}
          {!validateInputs().isValid && (showNameInput || numPlayers) && (
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="bg-red-900 bg-opacity-30 border border-red-600 rounded-lg p-3">
                <div className="flex items-center gap-2 text-red-400">
                  <span className="text-sm">⚠️</span>
                  <span className="text-sm font-medium">{validateInputs().error}</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Info Display */}
          {((numPlayers && racketsPerPlayer) || assignments.length > 0) && (
            <div className="border-t border-gray-600 pt-4 mt-4">
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                {(() => {
                  if (assignments.length > 0) {
                    // Calculate based on actual assignments (more accurate for added players)
                    const totalAssigned = assignments.reduce((total, player) => total + player.rackets.length, 0);
                    const poolRefreshes = Math.floor(totalAssigned / 26);
                    const usedInCurrentCycle = totalAssigned % 26;
                    const remaining = usedInCurrentCycle === 0 && totalAssigned > 0 ? 0 : 26 - usedInCurrentCycle;
                    
                    return (
                      <>
                        <span>Total Assigned: <span className="text-yellow-400">{totalAssigned}</span> rackets</span>
                        <span>Pool Refreshes: <span className="text-green-400">{poolRefreshes}</span> times</span>
                        <span>Remaining: <span className="text-blue-400">{remaining}</span> rackets</span>
                      </>
                    );
                  } else {
                    // Calculate based on planned assignments (before assignment)
                    const totalNeeded = parseInt(numPlayers || 0) * parseInt(racketsPerPlayer || 0);
                    const poolRefreshes = Math.floor(totalNeeded / 26);
                    const usedInCurrentPool = totalNeeded % 26;
                    const remaining = usedInCurrentPool === 0 && totalNeeded > 0 ? 0 : 26 - usedInCurrentPool;
                    
                    return (
                      <>
                        <span>Total Rackets Needed: <span className="text-yellow-400">{totalNeeded}</span></span>
                        <span>Pool Refreshes: <span className="text-green-400">{poolRefreshes}</span> times</span>
                        <span>Remaining: <span className="text-blue-400">{remaining}</span> rackets</span>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          )}
        </div>

        {/* Assignments Results */}
        {assignments.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {assignments.map((assignment) => (
              <div key={assignment.player} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={assignment.name}
                      onChange={(e) => updateAssignedPlayerName(assignment.player - 1, e.target.value)}
                      className="text-xl font-bold text-yellow-400 bg-transparent border-none outline-none hover:bg-gray-700 focus:bg-gray-700 rounded px-2 py-1 -ml-2 w-full"
                      placeholder={`Player ${assignment.player}`}
                    />
                    {/* Alignment Selector */}
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => updatePlayerAlignment(assignment.player - 1, 'Outlaw')}
                        className={`px-3 py-1 text-xs rounded-full transition-colors ${
                          assignment.alignment === 'Outlaw'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-600 text-gray-300 hover:bg-red-500'
                        }`}
                      >
                        Outlaw
                      </button>
                      <button
                        onClick={() => updatePlayerAlignment(assignment.player - 1, 'Law Abiding')}
                        className={`px-3 py-1 text-xs rounded-full transition-colors ${
                          assignment.alignment === 'Law Abiding'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-600 text-gray-300 hover:bg-blue-500'
                        }`}
                      >
                        Law Abiding
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 ml-2">
                    {assignment.rackets.length} racket{assignment.rackets.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="space-y-3">
                  {assignment.rackets.map((racket, idx) => (
                    <div 
                      key={`${racket.id}-${idx}`} 
                      className="bg-gray-700 rounded-lg p-4 border-l-4 border-red-500 hover:bg-gray-600 transition-colors group relative"
                    >
                      <div className="flex items-start justify-between">
                        <div 
                          className="flex-1 cursor-pointer"
                          onClick={() => {
                            setSelectedRacket(racket);
                            setShowDetails(true);
                          }}
                        >
                          <div className={`text-sm font-medium ${getSuitColor(racket.card)} mb-1`}>
                            {getSuitIcon(racket.card)} {racket.card}
                          </div>
                          <h4 className="font-bold text-white text-sm mb-2">{racket.title}</h4>
                          <p className="text-xs text-gray-300 line-clamp-2">{racket.description}</p>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              redrawSingleRacket(assignment.player - 1, idx);
                            }}
                            className="p-1 rounded hover:bg-gray-500 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                            title="Re-draw this racket"
                          >
                            <RefreshCw className="w-3 h-3" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRacket(racket);
                              setShowDetails(true);
                            }}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                            title="View details"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Racket Details Modal */}
        {showDetails && selectedRacket && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className={`text-lg font-medium ${getSuitColor(selectedRacket.card)} mb-2`}>
                      {getSuitIcon(selectedRacket.card)} {selectedRacket.card}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{selectedRacket.title}</h2>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 italic">{selectedRacket.description}</p>
                  
                  {selectedRacket.linkedRackets.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">Linked Rackets</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {selectedRacket.linkedRackets.map((linked, idx) => (
                          <li key={idx}>{linked}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Racket Boons</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedRacket.racketBoons).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium text-yellow-300 capitalize">{key.replace(/\d+/, '')}: </span>
                          <span className="text-gray-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedRacket.enhancedBoons && Object.keys(selectedRacket.enhancedBoons).length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Enhanced Boons</h3>
                      <div className="space-y-3">
                        {Object.entries(selectedRacket.enhancedBoons).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-medium text-yellow-300 capitalize">{key.replace(/\d+/, '')}: </span>
                            <span className="text-gray-300">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Footer */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>Click on any racket card to view detailed information • Share results with your players • Export for future reference</p>
          <p className="mt-2">
            Total Rackets: {RACKETS.length} | 
            {assignments.length > 0 ? 
              ` Assigned: ${assignments.reduce((total, player) => total + player.rackets.length, 0)} rackets to ${assignments.length} players` :
              ' Ready to assign rackets'
            }
          </p>
          {assignments.length > 0 && (
            <p className="mt-1 text-xs">
              Pool was refreshed {Math.floor(assignments.reduce((total, player) => total + player.rackets.length, 0) / 26)} times during assignment
              {shareUrl && ' • Results are shareable via URL'}
            </p>
          )}
        </div>

        {/* Buy Me a Coffee - Bottom of Page */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 mb-3">Enjoying this tool? Consider supporting its development:</p>
          <a 
            href="https://buymeacoffee.com/joesoes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" 
              alt="Buy Me A Coffee" 
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NecromundaRacketApp;
