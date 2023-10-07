  // Chattilogiikkaa 
          
  var socket = io();
  var loginForm = document.getElementById('login-form');
  var messages = document.getElementById('messages');
  var form = document.getElementById('form');
  var input = document.getElementById('input');
  var usernameInput = document.getElementById('username-input'); // Updated this line
  var loginButton = document.getElementById('login-button');
  var loginSection = document.getElementById('login'); // Moved this line outside the event listener
  var chatSection = document.getElementById('messages');
  var messageForm = document.getElementById('form');
  
  // Hide the chat-related elements initially
  chatSection.style.display = 'none';
  messageForm.style.display = 'none';
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var username = usernameInput.value.trim();
    if (username) {
      socket.emit('user login', username);
  
      // Hide the login form and show the chat-related elements
      loginSection.style.display = 'none';
      chatSection.style.display = 'block';
      messageForm.style.display = 'block';
    }
  });
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', { nickname: usernameInput.value, message: input.value });
      input.value = '';
    }
  });
  
  socket.on('chat message', function(data) {
    var item = document.createElement('li');
    item.textContent = data.nickname + ': ' + data.message;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
