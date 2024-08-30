# Obtentor de Endereço IP Público do Cliente

Uma biblioteca JavaScript eficiente e leve para obter, do lado do cliente, o endereço IP público.

## Uso

### Com módulo ES6:

```javascript
import obterIP from 'Obter-IP-Publico-do-Cliente.min.js';

obterIP().then(ip => {
  console.log('Seu IP público é:', ip);
});
```

### Com módulo CommonJS:

```javascript
const obterIP = require('Obter-IP-Publico-do-Cliente.min.js');

obterIP().then(ip => {
  console.log('Seu IP público é:', ip);
});
```

### Uso direto no navegador (via CDN):

```html
<script src="Obter-IP-Publico-do-Cliente.min.js"></script>
<script>
  obterIP().then(ip => {
    alert('Seu IP público é: ' + ip);
  });
</script>
```

## Características

- Caching inteligente para reduzir chamadas de rede
- Fallback entre múltiplas APIs para maior confiabilidade
- Leve e otimizado para performance
- Compatível com ambiente de navegador e Node.js

## API

### obterIP()

Retorna uma Promise que resolve com o endereço IP público do cliente.

```javascript
obterIP().then(ip => {
  console.log(ip); // Exemplo: '203.0.113.195'
}).catch(error => {
  console.error('Erro ao obter IP:', error);
});
```

## Contribuindo

Contribuições são bem-vindas!
## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
