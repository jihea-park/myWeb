import React from 'react';
import Layout from '../components/layout';
import '../css/page4.css'

export default class Page3 extends React.Component {
    render() {
        const items = [{
            title: 'Lorem ipsum dolor sit amet.1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo delectus et exercitationem fuga molestiae.1',
            backgroundImage: 'https://www.dropbox.com/s/g5590ee19mteeig/heic0910e.jpg?raw=1'
        },
        {
            title: 'Lorem ipsum dolor sit amet.2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo delectus et exercitationem fuga molestiae.2',
            backgroundImage: 'https://www.dropbox.com/s/9dxws73s6pp152z/heic1501a.jpg?raw=1'
        },
        {
            title: 'Lorem ipsum dolor sit amet.3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo delectus et exercitationem fuga molestiae.3',
            backgroundImage: 'https://www.dropbox.com/s/9f8xk48drwsdl3j/heic1608a.jpg?raw=1'
        }];

        return (
            <Layout>
                {items.map((item, index) => {
                    return (<section class={`container ${index}`} style={{backgroundImage: `url(${item.backgroundImage})`}}>
                        <header>
                            <h1>{item.title}</h1>
                            {item.content}
                        </header>
                    </section>);
                })}
            </Layout>)
    }

    
}