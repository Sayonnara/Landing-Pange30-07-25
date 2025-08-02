📄 Documentação Técnica – Projeto "DecolarPage"


🧾 1. Descrição do Projeto

O DecolarPage é um site pessoal desenvolvido para destacar os serviços de desenvolvimento web da autora. O objetivo principal é atrair clientes, apresentar os serviços oferecidos e fornecer um meio direto de contato profissional via WhatsApp.

🛠️ 2. Tecnologias Utilizadas
HTML5: Estruturação do conteúdo.

CSS3: Estilização e animações.


Responsividade: Layout adaptável via grid e flex.

📐 3. Estrutura do Projeto
3.1. Estrutura de Arquivos
css
Copiar

DecolarPage/

│
├── index.html

├── style.css

├── script.js

└── img/
  

    
🧱 4. Estrutura HTML

4.1. <header>
Exibe uma logo animada com efeito de flutuação.

Mensagem de boas-vindas e chamada para ação: “🚀 Vamos trabalhar juntos?”

4.2. .persona
Sessão "Quem sou eu?" apresentando a desenvolvedora.

Texto com foco em tecnologias e paixões da autora.

4.3. .benefits
Três articles com os serviços oferecidos:

Landing Pages

Site Institucional

Portfólios Pessoais

Cada card possui efeitos de animação e destaque visual ao hover.

4.4. .features
Dividida em três colunas de público-alvo para cada tipo de serviço.

Tags (span) coloridas para diferentes perfis (Afiliado, Estudante, Psicólogo etc.).

4.5. #contato
Chamada para ação com link direto ao WhatsApp da desenvolvedora.

4.6. <footer>
Informações de direito autoral e proteção de propriedade intelectual.

🎨 5. Estilização CSS

5.1. Cores e Estética
Fundo preto #000 com textos em #fff e gradientes vibrantes.

Elementos como títulos e números têm cores destacadas (ex: #ff0877, #04e8fd, #20c1ee).

5.2. Animações

.logo: animação flutuar com @keyframes.

.benifits-card: ao passar o mouse, vibra levemente com transform: translateX(...).

5.3. Responsividade
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); garante adaptação automática.

5.4. Detalhes Elegantes
Textos com background-clip: text para criar efeito de gradiente.

hover em botões e spans para maior interatividade.

🔍 6. Possíveis Melhorias Futuras

Implementar JavaScript funcional para interação com formulários, animações mais dinâmicas ou integração com APIs.

Adicionar formulário de contato como alternativa ao WhatsApp.

Otimizar SEO com meta tags e conteúdo estruturado.

Versão multilíngue (Português / Inglês).

Hospedagem no GitHub Pages ou Vercel com domínio personalizado.

📞 7. Contato Profissional

Sayonnara Seixas – Desenvolvedora Web

📲 WhatsApp: Clique aqui para conversar

✅ 8. Licença

Este projeto está protegido por direitos autorais e leis de propriedade intelectual. Reprodução ou cópia sem autorização estão proibidas.
