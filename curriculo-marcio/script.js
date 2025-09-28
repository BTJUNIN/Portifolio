//video de base que me tirou do limbo
//https://www.youtube.com/watch?v=zUcc4vW-jsI


//hardskills
//https://raw.githubusercontent.com/BTJUNIN/Portifolio/refs/heads/main/curriculo-M%C3%A1rcio/dados.json
fetch("https://raw.githubusercontent.com/BTJUNIN/Portifolio/refs/heads/main/curriculo-marcio/data/dados.json")
    .then(res => res.json())
    .then(data => {
        // Hard Skills
        const hardskillsDiv = document.querySelector('.lista-hardskills');
        data.hardskills.forEach(hardskill => {
            const markup = `
                <picture id="${hardskill.nome.toLowerCase()}">
                    <img src="${hardskill.icone}" alt="${hardskill.nome}">
                </picture>
            `;
            hardskillsDiv.insertAdjacentHTML('beforeend', markup);
        });

        // Soft Skills
        const softskillsDiv = document.querySelector('.Lista-Soft-Skills');
        data.softskills.forEach(skill => {
            const paragrafo = `<p style="font-size: 12px">${skill.nome}</p>`;
            softskillsDiv.insertAdjacentHTML('beforeend', paragrafo);
        });

        // Informações Pessoais

        const infoPessoalDiv = document.querySelector('#lista-Informações-pessoais');

        data.informaçõespessoais.forEach(info => {
            const key = Object.keys(info)[0];
            const value = info[key];
            const paragrafo = `<p class="p-0 m-0" style="font-size: 0.5rem"><strong>${key}</strong> ${value}</p>`;
            infoPessoalDiv.insertAdjacentHTML('beforeend', paragrafo);
        });

        //idiomas 
        const idiomasDiv = document.querySelector('.lista-idiomas');
        data.Idiomas.forEach(idioma => {
            const markup = `<img src="${idioma.icone}" alt="${idioma.idioma}" title="${idioma.idioma}">`;
            idiomasDiv.insertAdjacentHTML('beforeend', markup);
        });

        //interesse pessoais

        const interessesDiv = document.querySelector('.lista-interesses-pessoais');
        data.interessespessoais.forEach(interesse => {
            const markup = `<div class="interesse-item"> <img src="${interesse.icone}" alt="${interesse.nome}" title="${interesse.nome}">
           
        </div>
    `;
            interessesDiv.insertAdjacentHTML('beforeend', markup);
        });

        //educao
        const educacaoDiv = document.querySelector('.educacao');
        data.educação.forEach(item => {

            const markup = `
        <div class="curso">
            <img src="${item.icone}" alt="Ícone de ${item.nome}">
            <div>
                <a href="${item.link}" target="_blank">${item.nome}</a>
                <p>${item.periodo}</p>
            </div>
        </div>
    `;


            educacaoDiv.insertAdjacentHTML('beforeend', markup);
        });

        //portifólio 


        const portfolioDiv = document.querySelector('.lista-portfolio');
        data.portifólio.forEach(portifolio => {

            const markup = `
        <div class="curso">
            <img src="${portifolio.icone}" alt="Ícone de ${portifolio.nome}">
            <div>
                <a href="${portifolio.link}" target="_blank">${portifolio.nome}</a>
                <p>${portifolio.tecnologias}</p>
            </div>
        </div>
    `;

            portfolioDiv.insertAdjacentHTML('beforeend', markup);
        });





    })
    .catch(error => console.error("Erro ao carregar dados:", error));