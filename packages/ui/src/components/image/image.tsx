import { SolitoImage } from 'solito/image'
import testimage from '../assets/test.png';

export function ImageTest() {
  return <SolitoImage alt="test" src={testimage} width={200} height={200} onLayout={() => {}} contentFit="contain" resizeMode="contain" />
}