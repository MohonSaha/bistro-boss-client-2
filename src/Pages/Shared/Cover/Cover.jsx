import { Parallax } from 'react-parallax';

const Cover = ({ image, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={image}
                bgImageAlt="the dog"
                strength={-200}>

                <div className="hero h-[400px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md pt-44 pb-72">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>


                <div style={{ height: '200px' }} />
            </Parallax>


        </div>
    );
};

export default Cover;