
const formChat = document.getElementById('formChat');
const inputMessage = document.getElementById('inputMessage');
const chatMessages = document.getElementById('chatMessages');
const suggestions = document.getElementById('suggestions');
const sendButton = formChat.querySelector('button[type="submit"]');


let conversationState = 'start';
let agendamento = {
  nome: '',
  data: '',
  horario: '',
  especialidade: ''
};
window.onload = () => {
  setTimeout(() => chatMessages.focus(), 500);
  addBotMessage("Olá! Eu sou um assistente para agendar sua consulta. Por favor, me informe seu nome.");
}

