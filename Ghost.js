var Ghost = function(game, key, name, startPos, startDir) {
    this.game = game;
    this.key  = key;
    this.name = name;
    
    this.ORIGINAL_OVERFLOW_ERROR_ON = this.game.ORIGINAL_OVERFLOW_ERROR_ON;
    
    this.gridsize = this.game.gridsize;
    this.safetiles = [this.game.safetile, 35, 36];
    this.startDir = startDir;
this.startPos = startPos;
