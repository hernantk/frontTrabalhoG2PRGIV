

export class Materia{
    public id : Number;
    public materia : String;


}
export class Aluno{
    public id : Number;
    public nome : String;
    public email : String;
   

}
export class NewAluno{
    public nome : String;
    public email : String;
   

}
export class Trabalho{
    public id : Number;
    public titulo : String;
    public descricao : String;
    public nota : String;
    public dataPostagem : Date;
    public dataEntrega : Date;
    public materia : String;

}