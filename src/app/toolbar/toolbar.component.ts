import { Component } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	template: `text: {{ text }}
		<a hover>some text</a>
		<div class="app-toolbar1">
			<button *ngFor="let item of items" hover
				awstack
				(click)="clickHandle(item, $event)">
				{{ item.text }} - ({{ item.count }})
			</button>
		</div>
	`,
	styles: [
		`div{ border: 1px solid #333; padding: 4px }`
	]
})
export class AppToolbarComponent {
	showTips = false;
	text = Math.random();

	items = Array(10).fill(0).map((c, i) => {
		return {
			value: i,
			text: `链接${ i }`,
			count: 0
		}
	});
	clickHandle(item){
		console.log(arguments)
		item.count ++
	}
}