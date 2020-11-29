

export class Materia{
    public id : Number;
    public materia : string;


}
export class Aluno{
    public id : Number;
    public nome : string;
    public email : string;
   

}
export class NewAluno{
    public nome : string;
    public email : string;
   

}
export class Trabalho{
    public id : Number;
    public titulo : string;
    public descricao : string;
    public nota : string;
    public dataPostagem : Date;
    public dataEntrega : Date;
    public materia : string;

}