import { rgb } from "color-convert";

type HexColor = `#${string}`

type RGBString = `rgb(${number}, ${number}, ${number})`

type ColorFormats = 'rgb' | 'hex' | 'hsl' | 'hsv'

type ActionTypes = `update-${ColorFormats}-color`

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

export type AdjustColorActions = UpdateRGBColorAction | UpdateColorAction

type ColorState = {
    hexColor: string;
}

export const initialState: ColorState = {
    hexColor: '#00adef'
}

export const colorReducer = (
    state: ColorState,
    action: AdjustColorActions
) => {
    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload;
        return { ...state, hexColor }
    }

    if (action.type === 'update-rgba-color') {
        const hexColor = '#' + rgb.hex(action.payload.rgb);
        return { ...state, hexColor }
    }

    return state;
}