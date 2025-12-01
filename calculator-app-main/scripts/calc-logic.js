let firstOperand = ''; // armazena o primeiro operando (ou o resultado anterior)
let secondOperand = ''; // armazena o número atualmente digitado
let currentOperand = null; // armazena o operador pendente
let cleanDisplay = false; // flag para saber se um novo número deve começar


const displayElement = document.getElementById('resultado');
const buttons = document.querySelectorAll('.calc .btn');

function addNumber(number){
    if(cleanDisplay){
        secondOperand = '';
        cleanDisplay = false;
    }
    // evite múltiplos pontos decimais
    if(number === "." && secondOperand.includes('.')) return;

    // adiciona o número ou ponto ao operando atual 
    secondOperand += number;
    displayElement.textContent = secondOperand;
}

function choiceOperator(newOperator){
    // se o segundo operando estiver vazio não faz nada
    if(secondOperand == '') return;
    
    // Se já há um cálculo pendente (firstOperand != ''), executa o cálculo atual
    if(firstOperand != ''){
        calc();
    }
    
    // armazena o segundo operando como o primeiro (prepara para o próximo número)
    firstOperand = secondOperand;
    currentOperand = newOperator;
    cleanDisplay = true;
}

function calc(){
    const prev = parseFloat(firstOperand);
    const current = parseFloat(secondOperand);

    if(isNaN(prev) || isNaN(current) || currentOperand === null) return;

    let result;
    switch(currentOperand){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if(current === 0){
                result = 'Error / 0';
                break;
            }
            // Para lidar com problemas de precisão de ponto flutuante em JS,
            // você pode usar um toFixed() temporário ou uma biblioteca,
            // mas para este projeto simples, a divisão direta está OK.
            result = prev / current;
            break;
        default:
            return;
    }

    // Armazena o resultado no segundo operando (como string)
    secondOperand = result.toString(); 
    
    // Limpa o estado para um novo cálculo
    firstOperand = '';
    currentOperand = null;
    cleanDisplay = true;

    displayElement.textContent = formatResult(result);
}


// A função de formatação recebe o resultado (result)
function formatResult(num) {
    // Se for a string de erro (Error / 0), retorna a string
    if (typeof num === 'string') return num; 
    
    // Limita o número de casas decimais na exibição
    return num.toLocaleString('pt-BR', { maximumFractionDigits: 10 });
}

function cleanAll(){
    firstOperand = '';
    secondOperand = '0';
    currentOperand = null;
    cleanDisplay = false;
    displayElement.textContent = secondOperand;
}

function deleteLast(){
    // Se o display for "0" ou estiver limpo, não deleta
    if (secondOperand === '0' && !cleanDisplay) return;
    
    // remove o último caractere do número atual
    secondOperand = secondOperand.toString().slice(0, -1);
    
    // se ficar vazio, volta para '0'
    if(secondOperand == '') secondOperand = '0' 
    
    displayElement.textContent = secondOperand;
}

cleanAll()

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const value = button.textContent.trim(); // pega o texo do botão
        
        if(['+','-','*','/'].includes(value)){
            choiceOperator(value);
        }else if(value === '='){
            calc()
        }else if(value === 'reset'){
            cleanAll();
        }else if(value === 'del'){
            deleteLast();
        }else if(['0','1','2','3','4','5','6','7','8','9','.'].includes(value)){
            addNumber(value)
        }
    })
})