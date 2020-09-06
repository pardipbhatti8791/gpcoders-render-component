# Project Title
One Paragraph of project description goes here

## Installing
npm users
````
npm i gpcoders-render-component
````
 or yarn users
````
yarn add gpcoders-render-component
````

## Use
Will check the loader state and then it will load the component
````
import GPRenderComponent from 'gpcoders-render-component'

const DummyData = (props) => {
    const { data } = props
}

const App = () => {
    return (
        <>
            <h1>Hello React</h1>
            // Spinner bool or data can be in any form
            <GPRenderComponent component={DummyData} spinner={true} data={data} />
        </>
    )
}
````

## With custom loader
Can be used any React component as loader
````
import GPRenderComponent from 'gpcoders-render-component'

const CustomLoader = () => {
    return (
        <div>loading...</div>
    )
}

const DummyData = (props) => {
    const { data } = props
}

const App = () => {
    return (
        <>
            <h1>Hello React</h1>
            // Spinner bool or data can be in any form
            <GPRenderComponent spinner={true} data={data} customSpinner={<CustomLoader />} />
        </>
    )
}
````

## GPRenderComponent Class Props

| Name   |      Type      |  Default | Descrption |
|:----------:|:-------------:|:----:|:------|
| spinner |  boolean | false | Loader will wait for the component loading |
| customSpinner | element | null | Pass custom spinner |
| data | any | null | Can be Array, Object etc |

##### By: GPCODERS
###### website: https://www.gpcoders.com
###### copyright 2020 @gpcoders