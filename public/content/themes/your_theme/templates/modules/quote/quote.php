<?php
class Quote_Element extends Layotter_Element
{
    protected function attributes() {
        $this->title       = 'Quote';
        $this->description = 'Quote Element mit einem Kreis als Hintergrund';
        $this->icon        = 'font';
        $this->field_group = 'group_5b96829569b7d';
    }

    protected function frontend_view($fields) {
      Timber::render('quote.twig', $fields);
    }

    protected function backend_view($fields) {
      Timber::render('quote.twig', $fields);
    }
}

Layotter::register_element('quote', 'Quote_Element');
