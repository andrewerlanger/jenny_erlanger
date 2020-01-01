from django import template

register = template.Library()


@register.filter
def preview(text):
    line_list = text.split("\n")[:2]
    line_list.append("...")
    return "\n".join(line_list)


@register.filter
def add_spaces(text):
    return text.replace("<p>", "<p class='mb-4'>")


@register.filter
def color_navbar_links(page, link):
    if link in page:
        return "text-indigo-600"
