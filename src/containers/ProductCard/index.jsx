import './index.css';
import Image from '../Image';
import TextBlock from '../TextBlock';
import ColorProduct from '../Color';
import Size from '../Size';
import ButtonCart from '../Button';

const ProcutCard = () => (
    <div className="ProcutCard">
        <div className="ProcutCard-header">
            <Image image="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" />
        </div>
        <div className="productCard-text-color-size-btn">
            <div className='procutCard-TextBlock'>
                <TextBlock nameProduct="Backpack" price="34" description="With a concept designed to be easy to understand, RAINS bridge the gap between geografy and lifestyle." />
            </div>
            <div className='productCard-Color'>
                <ColorProduct black="" darkviolet="" yellow="" gray="" />
            </div>
            <div className='productCard-Size'>
                <Size small="S" medium="M" large="L" />
            </div>
            <div className='productCard-Btn'>
                <ButtonCart btnCart="Add to cart" />
            </div>
        </div>
    </div>
);


export default ProcutCard;