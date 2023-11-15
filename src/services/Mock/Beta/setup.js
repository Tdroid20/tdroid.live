export const mockupApi = [
    {
        name: "tdroid.live",
        description: "tdroid.live is a hub project that brings together all Tdroid projects in one place. Here you can find personal projects that are active such as Skyrus Production, personal portfolio and team. There are no limits to the dreamer! just believe",
        translation: {
            pt_BR: {
                description: "tdroid.live is a hub project that brings together all Tdroid projects in one place. Here you can find personal projects that are active such as Skyrus Production, personal portfolio and team. There are no limits to the dreamer! just believe"
            },
            en_US: {
                description:"tdroid.live é um projeto de hub que junta todos os projetos do Tdroid em um só lugar. Aqui poderá encontrar projetos pessoais que estão em ativa como a Skyrus Production, Portifolio pessoal e equipe. não há limites a o sonhador! basta acreditar"
            }
        },
        environment: {
            channel: "beta",
            isPreAlpha: true,
            RFPA: {
                operators: [{
                    cod: "2213",
                    name: "Tdroid",
                    hasAccess: true
                }, {
                    cod: "0101",
                    name: "Akashi",
                    hasAccess: false
                }]
            }
        },
        maintenance: {
            translation: {
                pt_BR: {
                    title: "Ops! parece que essa é uma versão pré alpha",
                    description: "essa é uma versão pré alpha do nosso site. para prosseguir insira seu codigo de acesso. caso não tenha fique tranquilo, pode vizuaizar no nosso canal beta"
                },
                en_US: {
                    title: "Oops! looks like this is a pre alpha version",
                    description: "This is a pre alpha version of our website. To proceed, enter your access code. If you don't have it, don't worry, you can view it on our beta channel"
                }
            }
        }
    }
]