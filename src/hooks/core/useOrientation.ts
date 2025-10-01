import { useEffect, useState } from 'react';
import { ScaledSize } from 'react-native';
import useDimensions from './useDimensions';

type OrientationState = {
    isPortrait: boolean;
    isLandscape: boolean;
};

const useOrientation = (): OrientationState => {

    const dimensions = useDimensions('screen');

    const getOrientation = (dim: ScaledSize) => {
        const isPortrait = dim.height > dim.width;
        return {
            isPortrait,
            isLandscape: !isPortrait,
        };
    };

    const [orientation, setOrientation] = useState(getOrientation(dimensions));

    useEffect(() => {
        setOrientation(getOrientation(dimensions));
    }, [dimensions]);

    return orientation;
}

export default useOrientation;
