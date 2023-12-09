import { rgb } from "color-convert";

export type UpdateColorAction = {
    type: 'update-hex-color',
    payload: {
        hexColor: string;
    }
}

export type UpdateRGBColorAction = {
    type: 'update-rgba-color',
    payload: {
        rgb: [number, number, number];
    }
}

type ColorState = {
    hexColor: string;
}

export const initialState: ColorState = {
    hexColor: '#00adef'
}

export const colorReducer = (
    state: ColorState,
    action: UpdateRGBColorAction | UpdateColorAction
) => {
    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload;
        return { ...state, hexColor }
    }

    if (action.type === 'update-rgba-color') {
        const hexColor = rgb.hex(action.payload.rgb);
        return { ...state, hexColor }
    }

    return state;
}