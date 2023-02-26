import { createSignal } from "solid-js";

interface ToggleProps {
    onOn: (event: MouseEvent) => void;
    onOff: (event: MouseEvent) => void;
    text: string;
    default: boolean;
    takeUpWidth: boolean;
}

export default function Toggle(props: ToggleProps) {
    const [ toggled, setToggled ] = createSignal(props.default);

    return (
        <button class={`transition-colors duration-150 p-4 rounded-xl ${toggled() ? 'bg-sky-300 dark:bg-sky-800' : 'bg-gray-100 dark:bg-dark-200'} ${props.takeUpWidth ? 'w-full' : ''}`} onClick={e => {
            setToggled(!toggled());

            if (toggled()) {
                props.onOn(e);
            } else {
                props.onOff(e);
            }
        }}>{props.text}</button>
    )
}