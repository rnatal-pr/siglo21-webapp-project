import React from 'react'
import {Button} from '../ButtonElement'
import {
    InfoSectionContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ButtonWrap,
    ImgWrap,
    Img
    } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, headLine, lightText, darkText, description, buttonLabel, img, alt}) => {
    return (
        <InfoSectionContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <ButtonWrap>
                            <Button to='home'>{buttonLabel}</Button>
                        </ButtonWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoSectionContainer>
    )
}

export default InfoSection
