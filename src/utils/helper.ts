import { Facebook, Google, Twitter } from "../assets"
import colors from "../assets/colors/colors"
export const AnotherLoginList = [
    { id: 1, value: Facebook },
    { id: 2, value: Google },
    { id: 3, value: Twitter }
]

export const RadioGroupGenderList = [
    {
        id: '1',
        label: 'Male',
        value: 'Male',
        size: 20,
        color: "#00a8ff",
        labelStyle: {
            color: colors.black,
            marginLeft: 6,
            fontFamily: "OpenSans-Regular",
        }
    },
    {
        id: '2',
        label: 'Female',
        value: 'Female',
        size: 20,
        color: "#ff8ab7",
        labelStyle: {
            color: colors.black,
            marginLeft: 6,
            fontFamily: "OpenSans-Regular",
        }
    }
]

export const RadioGroupWeightList = [
    {
        id: '1',
        label: 'Light',
        value: 'Light',
        size: 20,
        color: colors.black,
        labelStyle: {
            color: colors.black,
            marginLeft: 6,
            fontFamily: "OpenSans-Regular",
        }
    },
    {
        id: '2',
        label: 'Medium',
        value: 'Medium',
        size: 20,
        color: colors.black,
        labelStyle: {
            color: colors.black,
            marginLeft: 6,
            fontFamily: "OpenSans-Regular",
        }
    },
    {
        id: '3',
        label: 'Fat',
        value: 'Fat',
        size: 20,
        color: colors.black,
        labelStyle: {
            color: colors.black,
            marginLeft: 6,
            fontFamily: "OpenSans-Regular",
        }
    }
]
