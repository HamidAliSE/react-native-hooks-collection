import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

type DimensionType = 'window' | 'screen';

const useDimensions = (type: DimensionType = 'window') => {
    const getDimensions = () => Dimensions.get(type);
    const [dimensions, setDimensions] = useState(getDimensions());

    useEffect(() => {
        const onChange = ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
            setDimensions(type === 'window' ? window : screen);
        };

        const subscription = Dimensions.addEventListener('change', onChange);
        return () => subscription.remove();
    }, [type]);

    return dimensions;
}

export default useDimensions;
