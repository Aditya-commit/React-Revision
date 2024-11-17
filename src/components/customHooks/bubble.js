import PropTypes from 'prop-types';

const Bubble = ({pos , opacity}) => <div style={{'position' : 'absolute' , 'top' : (pos.y - 50) , 'left' : (pos.x - 50) , 'width' : 100 , height:100 , 'borderRadius' : 99999 , 'background' : 'lightpink' , opacity : opacity}}></div>  


Bubble.propTypes = {
    pos : PropTypes.object.isRequired
}
export default Bubble;