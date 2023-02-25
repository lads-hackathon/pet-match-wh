import { PetProps } from '../models'
import styles from './item.module.css'

interface ItemProps {
    pet: PetProps;
    i: number;
}

export default function Item(props: ItemProps)
{
    return (
        <div class={`${styles.itemCard}`} style={{
            "animation-delay": `${props.i/10}s`,
        }}>
            <img src={props.pet.image} class={styles.itemImage}/>

            <div>   
                <h1 class={styles.itemTitle}> {props.pet.name} </h1>
                <p class={styles.itemDescription}> {props.pet.description} </p>
            </div>
        </div>
    )
}