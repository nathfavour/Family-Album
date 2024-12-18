import React, { FC } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBContainer } from 'mdbreact';
import CarouselImage from './Carousel.utils/Carousel.image';
import { CarouselViewProps } from './Carousel.types';
import './carousel.scss';

const CarouselView: FC<CarouselViewProps> = ({ imageIds, imageDescriptions, imageCreationDates }) => (
	<MDBContainer className="fotos">
		<MDBCarousel
			activeItem={1}
			length={imageIds?.length}
			showControls={true}
			showIndicators={false}
			className="z-depth-1"
		>
			<MDBCarouselInner>
				{imageIds &&
					imageIds.map((image, i) => (
						<CarouselImage
							description={imageDescriptions[i]}
							creationDate={imageCreationDates[i]}
							key={image}
							image={image}
							itemId={i + 1}
						></CarouselImage>
					))}
			</MDBCarouselInner>
		</MDBCarousel>
	</MDBContainer>
);

export default CarouselView;
