import React from 'react'
import { DeleteStoryProps } from './../interfaces'

export default function DeleteStory(props: DeleteStoryProps) {
    return (
        <div
            onClick={() => props.onPressDeleteStory(props.currentId)}
            style={{
                position: "absolute",
                bottom: 10,
                right: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10000,
                cursor: "pointer",
                color: "white",
                textAlign: "center",
                letterSpacing: "0.2em",
                marginBottom: "0.4vh",
                opacity: "1",
                filter: "drop-shadow(0 0 5px black)",
                textTransform: "capitalize",
                transition: "opacity 300ms ease-in-out"
            }}
        >
            Delete
        </div>
    )
}
