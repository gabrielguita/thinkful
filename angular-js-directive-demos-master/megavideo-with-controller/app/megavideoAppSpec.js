describe('megaVideo', function() {
	
	var scope,
		element,
		compiled,
		html,
		mp4Src,
		oggSrc,
		videoPlayer,
		transcludedText,
		ctrl;

	beforeEach(module("megaVideoDemo"));
	beforeEach(module('mega-video.html'));
	beforeEach(inject(function($rootScope, $compile) {

		oggSrc = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
		mp4Src = 'https://archive.org/download/Duck_and_Cover/1951_duck_and_cover_512kb.mp4';
		transcludedText = 'transclude me!';

		html="";
		html += "<mega-video ";
		html += "	width=\"60%\" ";
		html += "	ogg='" + oggSrc + "'" ;
		html += "	mp4='" + mp4Src + "'>" ;
		html += "<p>" + transcludedText + "</p>";
		html += "</mega-video>";

		scope = $rootScope.$new();
		compiled = $compile(html)
		element = compiled(scope);
		scope.$digest();

	}));
	it('should render the element correctly', function(){
    	expect(element.find('video').length).toBe(1);
    	expect(element.find('source').length).toBe(2);
    	expect(element.find("source[src='" + mp4Src +"'][type='video/mp4']")).toBeTruthy();
    	expect(element.find("source[src='" + oggSrc +"'][type='video/ogv']")).toBeTruthy();
    	expect(element.find('video').attr('width')).toEqual('60%');
    	expect(element.find('video').attr('ng-click')).toBeTruthy();
    	expect(element.find('video').attr('ng-dblclick')).toBeTruthy();
	});
	it('should transclude the right content', function(){
		expect(element.text()).toContain(transcludedText);	
	})
	it('should expose a controller to set volume', function(){
		ctrl = element.data('$megaVideoController');
		videoPlayer = element.find('video')[0];
		expect(angular.isFunction(ctrl.setVolume)).toBe(true);
		ctrl.setVolume(0.5);
		expect(videoPlayer.volume).toBe(0.5);		

	});
});
describe('volumeSlider', function() {

	var scope,
		element,
		compiled,
		html,
		mp4Src,
		oggSrc,
		volumeSlider,
		initialVolume,
		changedVolume,
		ctrl;

	beforeEach(module("megaVideoDemo"));
	beforeEach(module('mega-video.html'));
	beforeEach(inject(function($compile, $rootScope) {
	
		oggSrc = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
		mp4Src = 'https://archive.org/download/Duck_and_Cover/1951_duck_and_cover_512kb.mp4';
		initialVolume = "0.1";
		changedVolume = 0.9;

		html="";
		html += "<mega-video ";
		html += "	width=\"60%\" ";
		html += "	ogg='" + oggSrc + "'" ;
		html += "	mp4='" + mp4Src + "'>" ;
		html += "	<div volume-slider initial-volume='" + initialVolume + "' ></div>";
		html += "</mega-video>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));
	it('should have a functioning volume slider with correct initial position', function(){
		volumeSlider = element.find('.ui-slider');
		expect(volumeSlider.slider("option", "value")).toBe(parseFloat(initialVolume));
		
		ctrl = element.data('$megaVideoController');
		spyOn(ctrl, 'setVolume');
		volumeSlider.slider("option", "value", changedVolume);
		expect(ctrl.setVolume).toHaveBeenCalledWith(changedVolume);
	})
});
