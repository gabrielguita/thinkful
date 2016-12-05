describe('megaVideo', function() {
	
	var scope,
		element,
		compiled,
		html,
		mp4Src,
		oggSrc;

	beforeEach(module("megaVideoDemo"));
	beforeEach(module('mega-video.html'));
	beforeEach(inject(function($rootScope, $compile) {

		oggSrc = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
		mp4Src = 'https://archive.org/download/Duck_and_Cover/1951_duck_and_cover_512kb.mp4"';
		
		html="";
		html += "<mega-video ";
		html += "	width=\"60%\" ";
		html += "	ogg='" + oggSrc + "'" ;
		html += "	mp4='" + mp4Src + "' >" ;
		html += "</mega-video>";

		scope = $rootScope.$new();
		compiled = $compile(html)
		element = compiled(scope);
		scope.$digest();

	}));
	it('should render the element correctly', function(){
    	expect(element.find('video').length).toBe(1);
    	expect(element.find('video source').length).toBe(2);
    	expect(element.find("source[src='" + mp4Src +"'][type='video/mp4']")).toBeTruthy();
    	expect(element.find("source[src='" + oggSrc +"'][type='video/ogv']")).toBeTruthy();
    	expect(element.find('video').attr('width')).toEqual('60%');
    	expect(element.find('video').attr('ng-click')).toBeTruthy();
    	expect(element.find('video').attr('ng-dblclick')).toBeTruthy();
	});
});