import React from 'react';

import './footer-contents.styles.css';

class FooterContent extends React.Component{
    constructor(){
        super();
        this.state={
            sections: [
                {
                    id:1,
                    classId:'yellow',
                    title: 'We turn your neighborhood store into the next Agora/Unimart.',
                    description: 'Headphones, Ramen, PS4 Games, etc : this is your mudir dokan supercharged like you’ve never seen them before!'
                },{
                    id:2,
                    classId:'white',
                    title: 'You choose your ‘Elaka’ and buy your favorite products',
                    description: 'You get the benefit of choosing from a wider range of products than your Conventional store / E-commerce.'
                },{
                    id:3,
                    classId: 'black',
                    title: 'We deliver your products within 1 - 3 Hrs!',
                    description: 'Depending on traffic, product availability, order demand and weather conditions!'
                },
            ]
        }
    }
    render(){
        return(
            <div className="temp">
                <h3>How we work</h3>
                {this.state.sections.map(({id,title,description,classId})=>(
                    <div key={id} className={classId}>
                        <span>{id}</span>
                        <h4>{title} </h4>
                        <p>{description} </p>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default FooterContent;