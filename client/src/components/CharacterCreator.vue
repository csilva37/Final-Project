<template>
  <h1>Your Character </h1>
  <label for="character name">Character Name: </label>
 <input type="text" id="character-name" v-model="name" placeholder="Enter a name" /> <br /><br />
 <label for="race-list">Character Race: </label>
        <select id="race-list" v-model="race" >
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Gnome">Gnome</option>
            <option value="Halfling">Halfling</option>
            <option value="Orc">Orc</option>
            <option value="Tiefling">Tiefling</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Half-Elf">Half-elf</option>
            <option value="Half-Orc">Half-orc</option>
        </select> <br /> <br />
  <label for="class-list">Character Class: </label>
          <select id="class-list" v-model="classDND">
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
          </select> <br /> <br />
    <label for="class-stats"> Character Stats:</label><br /> <br />
    <label for="strength"> Strength: </label>
    <input type="number" id="strength" v-model="strength"><br /> <br />
    <label for="dexterity"> Dexterity: </label>
    <input type="number" id="dexterity" v-model="dexterity"><br /> <br />
    <label for="constitution"> Constituion: </label>
    <input type="number" id="constitution" v-model="constitution"><br /> <br />
    <label for="wisdom"> Wisdom: </label>
    <input type="number" id="wisdom" v-model="wisdom"><br /> <br />
    <label for="intelligence"> Intelligence: </label>
    <input type="number" id="intelligence" v-model="intelligence"><br /> <br />
    <label for="charisma"> Charisma: </label>
    <input type="number" id="charisma" v-model="charisma"><br /> <br />
    <label for="exotic-language-list"> Choose an Exotic Language to learn: </label>
        <select id="language-list" v-model="language">
            <option value="Abyssal">Abyssal</option>
            <option value="Celestial">Celestial</option>
            <option value="Draconic">Draconic</option>
            <option value="Deep Speech">Deep Speech</option>
            <option value="Infernal">Infernal</option>
            <option value="Primordial">Primordial</option>
            <option value="Sylvan">Sylvan</option>
            <option value="Undercommon">Undercommon</option>
        </select><br /> <br />
        <label for="moral-alignment-list"> Choose a Moral Alignment for your character: </label>
        <select id="alignment-list" v-model="alignment">
            <option value="Lawful Good">Lawful Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
        </select><br /> <br />
        <label for="character-background"> Enter in your Character's Background Story (Optional): </label>
        <input type="text" id="character-background" class="w-full h-40">

        <p>{{ name }}
        {{ race }}
        {{ classDND }}
        {{ strength }}
        {{ dexterity }}
        {{ constitution }}
        {{ wisdom }}
        {{ intelligence }}
        {{ charisma }}
        {{ language }}
        {{ alignment }}</p>

</template>
<script>
    import axios from 'axios';

    export default {
        name: 'CharacterCreator',
        data: function () {
            return {
                name: null,
                classDND: null,
                strength: null,
                dexterity: null,
                constitution: null,
                wisdom: null,
                intelligence: null,
                charisma: null,
                language: null, 
                alignment: null

            }
        },
        methods: {
            postCharacter: function () {
                axios
                    .post('http://localhost:3000/characters', {
                        name: this.name,
                        classDND: this.classDND,
                        strength: this.strength,
                        dexterity: this.dexterity,
                        constitution: this.constitution,
                        wisdom: this.wisdom,
                        intelligence: this.intelligence,
                        charisma: this.charisma,
                        language: this.language,
                        alignment: this.alignment
                    });
            }
        }
    }
</script>