// Native Web Audio API soundscape synthesizer for traditional craft workshops
class SoundscapeSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  public startSoundscape(type: string = 'pottery'): boolean {
    try {
      if (this.isPlaying) return true;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.isPlaying = true;

      if (type.includes('gốm') || type.includes('pottery') || type.includes('bat-trang')) {
        this.playPotteryWheelAmbiance();
      } else if (type.includes('lụa') || type.includes('silk') || type.includes('van-phuc')) {
        this.playSilkLoomAmbiance();
      } else {
        this.playWoodblockAmbiance();
      }
      return true;
    } catch {
      return false;
    }
  }

  private playPotteryWheelAmbiance() {
    if (!this.ctx || !this.masterGain) return;
    // Low soothing drone for the rotating wheel
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 drone

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(260, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start();

    // Periodic gentle water droplet or ceramic tap tone
    this.intervalId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      const chime = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chime.type = 'sine';
      // Harmonic scale (pentatonic Vietnamese scale: C, D, F, G, A)
      const freqs = [523.25, 587.33, 698.46, 783.99, 880.0];
      const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];
      chime.frequency.setValueAtTime(randomFreq, this.ctx.currentTime);

      chimeGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      chime.connect(chimeGain);
      chimeGain.connect(this.masterGain);
      chime.start();
      chime.stop(this.ctx.currentTime + 1.2);
    }, 2800);
  }

  private playSilkLoomAmbiance() {
    if (!this.ctx || !this.masterGain) return;
    // Rhythmic shuttle sound simulation
    this.intervalId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    }, 1400);
  }

  private playWoodblockAmbiance() {
    if (!this.ctx || !this.masterGain) return;
    this.intervalId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    }, 2200);
  }

  public stopSoundscape() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
    this.isPlaying = false;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const soundscape = new SoundscapeSynthesizer();
