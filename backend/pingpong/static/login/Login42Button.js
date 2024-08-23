const Login42Button = {
    render: function(container) {
        console.log('Login42Button render method called');
        if (!container) {
            console.error('Container is null or undefined');
            return;
        }
        const button = document.createElement('button');
        button.textContent = 'Login with 42';
        button.style.padding = '10px';
        button.style.fontSize = '16px';
        button.style.backgroundColor = '#007bff';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        
        button.addEventListener('click', () => {
            console.log('42 login button clicked');
            // Add your login logic here
        });
        
        container.appendChild(button);
        console.log('Button appended to container');
    }
};

export default Login42Button;