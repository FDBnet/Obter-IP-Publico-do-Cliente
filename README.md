# Obtentor de Endereço IP Público do Cliente
Uma biblioteca JavaScript eficiente e leve para obter, do lado do cliente, o endereço IP público.

## Instalação
```bash
npm install Obter-IP-Publico-do-Cliente
```

## Uso
### Com módulo:
```
import obterIP from 'Obter-IP-Publico-do-Cliente';

obterIP().then(ip => {
  console.log('Seu IP público é:', ip);
});
```
ou
```
import obterIP from 'Obter-IP-Publico-do-Cliente.js';

obterIP().then(ip => {
  alert('Seu IP público é:', ip);
});
```

### Sem módulo:
```
obterIP().then(ip => {
  alert(ip);
});
```

## Características
- Caching inteligente para reduzir chamadas de rede
- Fallback entre múltiplas APIs para maior confiabilidade
- Leve e otimizado para performance

## Contribuindo
Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
