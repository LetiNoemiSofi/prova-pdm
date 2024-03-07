let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

mostrarAlunosAprovados(chamadaDeAlunos)
mostrarAlunosReprovados(chamadaDeAlunos)

function mostrarnomeAlunos(alunos){
    alunos.forEach((aluno) => console.log(""+ aluno.nome));     
}

function alunoAprovado(materia){
    if(materia.nota >= 6 && materia.presenca >= 75 ){
        return true
    }
    return false
}
function alunoReprovado(materia){
    if(materia.nota <= 6 && materia.presenca <= 75 ){
        return true
    }
    return false
}

function mostrarAlunosAprovados(ListaDeAlunos){

    console.log("> Mostra as materias que os alunos foram aprovados");

    ListaDeAlunos.forEach(aluno => 
    {
        const materiasAlunoAprovado = aluno.materia.map 
        (materia => 
        {
            return alunoEstaAprovado(materia)
        }
        )
    }
}
    
mostrarnomeAlunos(chamadaDeAlunos)
