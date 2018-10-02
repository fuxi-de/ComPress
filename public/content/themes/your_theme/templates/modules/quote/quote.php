<?php
class Quote_Element extends Layotter_Element
{
    protected function attributes() {
        $this->title       = 'Quote';
        $this->description = 'Quote Element';
        $this->icon        = 'font';
        $this->field_group = 'acf_quote';
    }

    protected function frontend_view($fields) {
        Timber::render('quote.twig', $fields);
    }

    protected function backend_view($fields) {
        Timber::render('quote.twig', $fields);
    }
}

Layotter::register_element('quote', 'Quote_Element');
