import { Header } from "../header/Header"
import { ContainerInsert } from "../utils/ContainerInsert"

export function InsertCard(){
    return(
        <>
        <Header/>
        <ContainerInsert>
        <form>
            <section><p>Number</p>
            <input type="text"></input></section>

            <section><p>Name Card</p>
            <input type="text"></input></section>

            <section><p>cvc</p>
            <input type="text"></input></section>

            <section><p>Expiration date</p>
            <input type="text"></input></section>

            <section><p>password</p>
            <input type="text"></input></section>

            <section>
            <p>virtual</p>
            <select>
		        <option value="false">false</option>
		        <option value="true">true</option>
	        </select>
            </section>

            <section>
            <p>type</p>
            <select>
		        <option value="false">credit</option>
		        <option value="true">debit</option>
	        </select>
            </section>

            <section>
            <p>title</p>
            <input type="text"></input>
            </section>
        </form>
        </ContainerInsert>
        </>
    )
}