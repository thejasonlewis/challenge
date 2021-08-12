import React from 'react';

const breedList =[ 
    {name: 'affenpinscher', key: 1},
    {name: 'border collie', key: 2},
    {name: 'boxer', key: 3},
    {name: 'cocker spaniel', key: 4},
    {name: 'english bulldog', key: 5},
    {name: 'great dane', key: 6},
    {name: 'norwich terrier', key: 7},
    {name: 'shetland sheepdog', key: 8},
    {name: 'irish terrier', key: 9},
    {name: 'pomeranian', key: 10},
];

  



class Dogs extends React.Component {
    constructor (props){
        super(props);
        this.state = {breedImg:'./images/affenpinscher.jpg'}
        this.breedClick = this.breedClick.bind(this);
    }
     breedClick(e) { 
         var breed = e.target.outerText;
         console.log(breed);
         console.log(e);
        var breedImage = breed.replace(' ','_');
        breedImage = './images/' + breedImage + '.jpg';
        console.log(breedImage);
        this.setState({
            breedImg: breedImage
        });
      }

    render() {
        return (
            <div>
                <h3>Vetspire Code Test Front End Solution</h3>
                 <p>Here is a list of dogbreeds that our practice takes care of. Please click the link to see a picture of our listed breeds.</p>
                {breedList.map(breed => <button key={breed.key} onClick={this.breedClick}>{breed.name}</button>)}
                <div>
                    <img className="dog-image" src={this.state.breedImg} alt="dog breed"/>
                </div>
            </div>
        )
    }
} export default Dogs