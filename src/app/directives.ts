import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[hover]'
})
export class HoverDirective {
	constructor(private ele: ElementRef){
		console.log('>>', ele)
		//ele.nativeElement.style.color = 'red'
	}
	@HostListener('mouseover') onmouseover(){
		this.ele.nativeElement.style.color = 'red'
	}
	@HostListener('mouseout') onmouseout(){
		this.ele.nativeElement.style.color = ''
	}
}

@Directive({
	selector: '[awstack]'
})
export class AWStackDirective{
	constructor(private ele: ElementRef){
		ele.nativeElement.innerHTML = 'awstack'
	}
}