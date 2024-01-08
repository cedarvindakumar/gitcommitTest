import React from 'react'

export default function Javascript() {
    const EmpDetails = [
        {
            Name: "Arvinda",
            Email: "Arvinda@gmail.com",
            Age: 30,
        },
        {
            Name: "Vikas",
            Email: "vikas@gmail.com",
            Age: 32,
        },
    ];




    // Global scope 
    let x = 10;
    function GlobalScope() {
        return <>Global scope: {x}</>
    }

    // Global scope 

    function FunctionScope() {
        let y = 5, x = 3;
        return <>Function scope:{x} {y}</>
    }

    // 
    function BlockScope(a: any) {
        let z = 12;
        //console.log(a(),"block")
        return <>Block scope{z}{a()}</>
    }

    const final = () => BlockScope(FunctionScope)
    // ReferenceError: x is not defined

    // Using map to get keys and values of each object
    // const keysAndValues = EmpDetails.map((emp) => {
    //     const keys = Object.keys(emp);
    //     const values = Object.values(emp);
    //     return { keys, values };
    // });

    //console.log(keysAndValues);

    // higher order function
    const radius = [5, 5, 3, 2];

        const output: any = [];
        for (let i = 0; i < radius.length; i++) {
            output.push(Math.PI * radius[i] * radius[i]);
        }

        const finalOut = output.map((item: any, index: any) => {
            return <p key={index}>{item}</p>;
        })



    return (
        <div>
            <h4>Get key values</h4>
            {EmpDetails.map((emp) => {
                const keys = Object.keys(emp);
                const values = Object.values(emp);
                return <div>{Object.entries(emp)}</div>
            })
            }


            <>Area of circle</>


            {finalOut}


        </div>
    )
}
