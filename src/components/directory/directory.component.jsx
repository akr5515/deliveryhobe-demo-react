import React from 'react';

import './directory.styles.css';

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections: [
                {
                  title: 'Most Popular in Your Elaka',
                  imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A894_Most-Popular-In-Your-Elaka_t50CS.gif',
                  id: 1
                },
                {
                  title: 'DH - Exclusive Weekly Deals',
                  imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A895_DH-Exclusive-Weekly-Deals%21_0ruR2.gif',
                  id: 2
                },
                {
                  title: 'Smoking Essentials',
                  imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A896_Smoking-Essentials-%28FeelsHobe%29_eqpYA.jpg',
                  id: 3
                },
                {
                  title: 'Medicine',
                  imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A911_Medicine_iJ4lN.jpg',
                  size: 'large',
                  id: 4
                },{
                  title: 'Digital Subscriptions Games & Streaming',
                  imageUrl: 'https://api.deliveryhobe.com/image/thumb/898_Digital-Subscriptions-(-Games-and-Streaming-)_CoAwB.gif?v=04hwj',
                  size: 'large',
                  id: 5
                },{
                    title: 'Bangla Street Food',
                    imageUrl: 'https://api.deliveryhobe.com/image/thumb/901_Bangla-Street-Food_F0fhW.jpg?v=72fxf',
                    size: 'large',
                    id: 6
                  },{
                    title: 'For the Bedroom',
                    imageUrl: 'https://api.deliveryhobe.com/image/thumb/908_For-the-Bedroom_jXSbq.gif?v=q9uf9',
                    size: 'large',
                    id: 7
                  },{
                    title: 'Digital Food Court',
                    imageUrl: 'https://api.deliveryhobe.com/image/thumb/902_Digital-Food-Court_ukI-J.jpg?v=uigif',
                    size: 'large',
                    id: 8
                  },{
                    title: 'Party Essentials',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A897_Party-Essentials_CfYzn.jpg',
                    size: 'large',
                    id: 9
                  },{
                    title: 'Beverages & Ice cream',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A903_Bevergae-Juices-and-Ice-cream_qxeZO.jpg',
                    size: 'large',
                    id: 10
                  },{
                    title: 'Chocolate & Candy',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A904_Chocolate-and-Candy_D__0I.jpg',
                    size: 'large',
                    id: 11
                  },{
                    title: 'For Rooftop Chills',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A905_For-Rooftop-Chills_t1QNR.jpg',
                    size: 'large',
                    id: 12
                  },{
                    title: 'Stationary Art & Office Supplies',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A906_Stationary-Art-and-Office-Supplies_IElp2.jpg',
                    size: 'large',
                    id: 13
                  },{
                    title: 'GYM Essentials',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A907_GYM-Essentials_ZGnb-.jpg',
                    size: 'large',
                    id: 14
                  },{
                    title: 'Women Health & Grooming',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A910_Women%27s-Health-and-Grooming_bQE7k.gif',
                    size: 'large',
                    id: 15
                  },{
                    title: 'Baby Products',
                    imageUrl: 'https://dh-public-assets.s3.ap-southeast-1.amazonaws.com/thumb%3A%3A912_Baby-Products_zuFMF.jpg',
                    size: 'large',
                    id: 16
                  },
                
              ]
            };
        }
        render(){
            return(
                <div className="directory-container">
                    
                    {this.state.sections.map(({title,imageUrl,id,size})=>(
                        <figure key={id} className="directory-fig">
                            <img src={imageUrl} className="directory-image"/>
                            <figcaption>{title}</figcaption>
                        </figure>
                    ))
                    }
                </div>
            )
        }
}

export default Directory;