<template>
    <div class="character-viewer">
        <h1>Character Viewer</h1>
        <p v-for="(character, index) in characters" v-bind:key="index">{{character.name}} is a {{character.classDND}}! They have {{character.strength}} strength, {{character.dexterity}} dexterity, {{character.constitution}} constitution,
            {{character.wisdom}} wisdom, {{character.intelligence}} intelligence, and {{character.charisma}} charisma. Their special language is {{character.language}} and their moral alignment is {{character.alignment}}
        </p>
    </div>
</template>

<script>
     export default {
        name: 'CharacterViewer',
        props: {
            characters: Array
        }
    }
    
    </script>