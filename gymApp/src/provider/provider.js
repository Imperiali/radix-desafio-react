import React, {createContext} from 'react';

// Criando um contexto
const ReactContext = createContext({});

// Criando um HOC para adicionar a storage e a action no componente
export const withStorageAndAction = (Comp) => (props) => (
    <ReactContext.Consumer>
        { (value) => <Comp {...props} storage={value.storage} action={value.action}/> }
    </ReactContext.Consumer>);

// Criando o componente de provider que vai gerenciar o estado centralizado
export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    id: "1",
                    title: "peito",
                    data : [
                        {
                            id: 1,
                            name: "exercicio a",
                            repetitions: "3/15",
                            weight: 35
                        },
                        {
                            id: 2,
                            name: "exercicio b",
                            repetitions: "3/15",
                            weight: 35
                        },
                        {
                            id: 3,
                            name: "exercicio c",
                            repetitions: "3/15",
                            weight: 35
                        }
                    ]
                },
                {
                    id: "2",
                    title: "costas",
                    data : [
                        {
                            id: 1,
                            name: "exercicio a",
                            repetitions: "3/15",
                            weight: 35
                        },
                        {
                            id: 2,
                            name: "exercicio b",
                            repetitions: "3/15",
                            weight: 35
                        },
                    ]
                },
                {
                    id: "3",
                    title: "perna",
                    data : [
                        {
                            id: 1,
                            name: "exercicio a",
                            repetitions: "3/15",
                            weight: 35
                        },

                    ]
                }
            ]
        }
    }

    render() {
        return (<ReactContext.Provider value={{
            storage: this.state,
            action: {
                addCategories: (item) => this.setState(() => {
                   return this.state.categories.map((category) => {
                        if (category.title.toLowerCase() === item.title.toLowerCase()){
                            console.log('chegou aqui')
                            category.data.push({
                                id: item.id,
                                name: item.name,
                                repetitions: item.repetitions,
                                weight: item.weight
                            })
                        }
                        console.log('Isso é o que tem:', category)
                    })
                })
            }
        }}>
            {this.props.children}
        </ReactContext.Provider>)
    }
}

/*
Jeito bonitão

addCategories: (item) => {
    const newMapItem = {
        id: item.id,
        name: item.name,
        repetitions: item.repetitions,
        weight: item.weight
    };
    const oldCategory = this.state.categories.find(category => category.title.toLowerCase() === item.title.toLowerCase());
    let newCategory = {...oldCategory, data: [...oldCategory.data, newMapItem]};
    let othersCategories = this.state.categories.filter((category) => category.title.toLowerCase() !== item.title.toLowerCase())
    this.setState({categories: [...othersCategories, newCategory]});
},
}
 */