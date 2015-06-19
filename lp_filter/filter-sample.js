
var audio = new Audio();
audio.src='wihih3.wav';
audio.controls = true;
audio.loop = true;
audio.autoplay = false;


context = new AudioContext(); // AudioContext instans
analyser = context.createAnalyser(); // Analyser
canvas = document.getElementById('analyser_render');
ctx = canvas.getContext('2d');

function frameLooper(){
  window.requestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height); // rensa canvas
  ctx.fillStyle = '#fc5050'; // färg på barerna
  bars = 150;
  for (var i = 0; i < bars; i++) {
    bar_x = i * 2;
    bar_width = 0.6;
    bar_height = -(fbc_array[i] / 2);
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}

var QUAL_MUL = 30;

function FilterSample() {
  this.isPlaying = false;
  loadSounds(this, {buffer: 'visa.mp3'});
};

FilterSample.prototype.play = function() {
  document.getElementById("play-pause-icon").className = "fa fa-stop fa-fw fa-2x";

  var source = context.createBufferSource(); // skapa ljudkällan
  source.buffer = this.buffer; //koppla buffern till ljudkällan

  var filter = context.createBiquadFilter(); //skapa filtret
  filter.type = filter.LOWPASS;	//bestäm typ av filter
  filter.frequency.value = 5000;	//filtrets startvärde i Hz (max)
  source.connect(filter); // koppla filtret till ljudkällan
  filter.connect(context.destination);

  filter.connect(analyser);
  analyser.connect(context.destination);
  frameLooper();

  source[source.start ? 'start':'noteOn'](0);
  source.loop = true;

  this.source = source;	//spara källan och filternod
  this.filter = filter;
};

FilterSample.prototype.stop = function() {
  document.getElementById("play-pause-icon").className = "fa fa-play fa-fw fa-2x";
  this.source.stop(0);
};

FilterSample.prototype.toggle = function() {
  this.isPlaying ? this.stop() : this.play();
  this.isPlaying = !this.isPlaying;
};

FilterSample.prototype.changeFrequency = function(element) {
	console.log(element);

	var minValue = 20;	//minsta frekvens
	var maxValue = context.sampleRate / 2;	//högsta frekv. enl. Nyquists
	//antal oktaver
	var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;	
	var multiplier = Math.pow(2, numberOfOctaves * (element.value - 1.0)); //faktor
	this.filter.frequency.value = maxValue * multiplier; //ger filtret ny brytningsfrekvens
};

FilterSample.prototype.changeQuality = function(element) {
  this.filter.Q.value = element.value * QUAL_MUL;
};

FilterSample.prototype.toggleFilter = function(element) {
  this.source.disconnect(0);
  this.filter.disconnect(0);

  if (element.checked) {
    this.source.connect(this.filter);
    this.filter.connect(context.destination);

  } else {
    this.source.connect(context.destination);
  }
};
