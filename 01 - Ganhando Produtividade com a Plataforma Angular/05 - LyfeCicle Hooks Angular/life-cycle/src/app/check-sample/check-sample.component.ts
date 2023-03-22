import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
  OnDestroy
} from "@angular/core";

@Component({
	selector: "app-check-sample",
	templateUrl: "./check-sample.component.html",
	styleUrls: ["./check-sample.component.css"],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit,
    OnDestroy
{
	quantidade: number = 0;

	constructor() {}

  adicionar() {
    this.quantidade++
  }

  decrementar() {
    this.quantidade--
  }

  // checked -> content -> view

  // Quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
		console.log("AfterContentInit");
	}

  // Depois da inicialização da view
  ngAfterViewInit(): void {
		console.log("AfterViewInit");
	}

  // Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
		console.log("AfterContentChecked");
	}

  // Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
		console.log("AfterViewChecked");
	}

	ngDoCheck(): void {
		console.log("DoChecked");
	}

	ngOnInit(): void {
		console.log("OnInit");
	}

  ngOnDestroy(): void {
    console.log("Goodbye my friend");
  }
}
