import React from 'react'

const Assignment5 = () =>{
    const people = [
        { 
          name: 'chris',
          pets: [
            { name: 'bella', type: 'dog' },
            { name: 'cocoa', type: 'dog' }
          ]
        },
        { 
          name: 'nick',
          pets: [
            { name: 'hilo', type: 'cat' },
            { name: 'polly', type: 'cat' }
          ]
        }
      ]
    return(
        <div>
            { people.map((person,index)=>{
              return(
                <div key={index}>
                    <h2>{person.name}</h2>
                    <div>
                      {person.pets.map((pet,i)=>{
                        return(
                          <p key={i}>
                          {pet.name} , {pet.type}
                          </p>
                        )
                        
                      })}
                    </div>
                </div>
              )
                
            })}
        </div>
    )
}

export default Assignment5