import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any ={
    nome: null,
    email: null
  }

  constructor(private http:Http) { }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo) ,
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  onSubmit(form){
    //console.log(form.value);
    this.http.post('enderecaoServidor/formUsuario', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => console.log(dados));
  }

  consultaCEP(cep, form){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      
      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.resetDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));

      }
    } 
  }

  populaDadosForm(dados, formulario){
      /*formulario.setValue({
        nome: formulario.value.nome,
        email: formulario.value.email,
        enderecos: {
          cep: dados.cep,
          numero: '',
          complemento: dados.complemento,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });*/
      formulario.form.patchValue({
        enderecos: {
          complemento: dados.complemento,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });
      //console.log(formulario);
  }

  resetDadosForm(formulario){
    formulario.form.patchValue({
      enderecos: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
