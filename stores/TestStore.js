import { defineStore } from 'pinia';

export const useTestStore = defineStore('test',{
    state: () => ({
        message: "hello",
        life: 100,
        food: 100,
        happiness: 100,
        sleep: 100,
    }),
    actions:{
            setMessage(newMessage){
            this.message = newMessage
        },
        setLife(newLife){
            this.life = newLife
        },
        setFood(newFood){
            this.food = newFood
        },
        setFood(newHappiness){
            this.happiness = newHappiness
        },
        setSleep(newSleep){
            this.sleep = newSleep
        }
    },
    getters:{
        currentLife(){
            return this.life

        },
        currentFood(){
            return this.food

        },
        currentHappiness(){
            return this.happiness

        },
        currentSleep(){
            return this.sleep

        },
        upper(){
            return this.message.toUpperCase()
    }
},
})