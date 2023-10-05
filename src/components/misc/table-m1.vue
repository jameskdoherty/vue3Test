<template>
    <div class="table-classic__container">
        <table class="tblm6" tabindex="0">
            <colgroup>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th><span>Education system</span> <span><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Male score</span> <span><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Female score</span> <span><i class="fa fa-chevron-down"></i><i
                                class="fa fa-chevron-up"></i></span></th>
                    <th><span>Score difference between<br>male and female students</span>
                        <span><i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up"></i></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Lorem ipsum</th>
                    <td>370</td>
                    <td>0.6</td>
                    <td>0.4</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container-fluid" v-cloak>
        <div class="text-right">
            <p-menu id="overlay_menu" ref="menu" :model="items" :popup="true"></p-menu>
            <p-button icon="pi pi-cog" class="p-button-rounded p-button-primary m-2" @click="toggle" aria-haspopup="true"
                aria-controls="overlay_menu" />
            <p-button :label="data.common_lang.save + ' ' + data.common_lang.quote" class="m-2" />
        </div>

        <DataTable :value="products" :pt="{
            table: 'table is-fullwidth stripes',
        }">
            <Column field="code" header="Code" sortable></Column>
            <Column field="name" header="Name" sortable></Column>
            <Column field="category" header="Category" sortable></Column>
            <Column field="quantity" header="Quantity" sortable></Column>
        </DataTable>
    </div>
</template>
  
<script>
import { onMounted, ref, watch, computed } from 'vue'
import PMenu from 'primevue/menu'
import PButton from 'primevue/button'
import PBreadcrumb from 'primevue/breadcrumb'
import Products from '../../assets/testdata/Products.json'
const products = ref(Products);

export default {
    name: 'Quote',
    components: {
        'p-breadcrumb': PBreadcrumb,
        'p-menu': PMenu,
        'p-button': PButton,
    },
    setup() {
        const frontEndData = {
            common_lang: {
                quote: '"Lorem ipsum..."',
                save: 'Save',
                hide_item_date: 'Hide item',
                unhide_item_date: 'Unhide item',
            },
        }
        const data = ref(frontEndData)
        const quoteIsEdit = ref(false)

        const toggle = (event) => {
            menu.value.toggle(event)
        }
        const quote = ref({
            display_item_date: true,
            display_tax: true,
            display_discount: false,
        })
        const menu = ref()
        const items = computed(() => [
            {
                label: data.value.common_lang.options,
                items: [
                    {
                        visible: quote.value.display_item_date,
                        label: data.value.common_lang.hide_item_date,
                        icon: 'pi pi-eye-slash',
                        command: (event) => {
                            quote.value.display_item_date = !quote.value.display_item_date
                        },
                    },
                    {
                        visible: !quote.value.display_item_date,
                        label: data.value.common_lang.unhide_item_date,
                        icon: 'pi pi-eye',
                        command: () => {
                            quote.value.display_item_date = !quote.value.display_item_date
                        },
                    },
                ],
            },
        ])

        return {
            data,
            quoteIsEdit,
            menu,
            items,
            toggle,
            quote,
        }
    },
}
</script>
  